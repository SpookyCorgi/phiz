using System;
using System.Collections.Generic;
using System.Text;

namespace Phiz
{
    public class OSCValue
    {
        public enum ValueType { Float, Integer, String }

        public ValueType Type { get; }
        public float FloatValue { get; }
        public int IntValue { get; }
        public string StringValue { get; }

        public OSCValue(float value)
        {
            Type = ValueType.Float;
            FloatValue = value;
        }

        public OSCValue(int value)
        {
            Type = ValueType.Integer;
            IntValue = value;
        }

        public OSCValue(string value)
        {
            Type = ValueType.String;
            StringValue = value;
        }
    }

    public class OSCMessage
    {
        public string Address { get; set; }
        public List<OSCValue> Values { get; set; }

        public OSCMessage(string address, List<OSCValue> values)
        {
            Address = address;
            Values = values;
        }
    }

    public class OSCParser
    {
        public static OSCMessage ParseOSCBytesToMessage(byte[] data)
        {
            List<OSCValue> values = new List<OSCValue>();
            int index = 0;

            // Read address pattern
            StringBuilder addressPattern = new StringBuilder();
            while (data[index] != 0)
            {
                addressPattern.Append((char)data[index]);
                index++;
            }
            //Debug.Log("Address pattern: " + addressPattern);
            // Align to the next 4-byte boundary
            index = (index + 4) & ~3;

            // Read type tag string
            StringBuilder typeTags = new StringBuilder();
            typeTags.Append(','); // OSC type tag strings should start with a comma
            while (data[index] != 0)
            {
                typeTags.Append((char)data[index]);
                index++;
            }
            //Debug.Log("Type tags: " + typeTags);
            // Align to the next 4-byte boundary
            index = (index + 4) & ~3;

            // Parse arguments
            for (int i = 1; i < typeTags.Length; i++)
            {
                char typeTag = typeTags[i];
                if (typeTag == 'f')
                {
                    if (BitConverter.IsLittleEndian)
                    {
                        Array.Reverse(data, index, 4); // Convert big-endian to little-endian
                    }
                    float floatValue = BitConverter.ToSingle(data, index);
                    //Debug.Log("Parsed float value: " + floatValue);
                    values.Add(new OSCValue(floatValue));
                    index += 4;
                }
                else if (typeTag == 'i')
                {
                    if (BitConverter.IsLittleEndian)
                    {
                        Array.Reverse(data, index, 4); // Convert big-endian to little-endian
                    }
                    int intValue = BitConverter.ToInt32(data, index);
                    //Debug.Log("Parsed integer value: " + intValue);
                    values.Add(new OSCValue(intValue));
                    index += 4;
                }
                else if (typeTag == 's')
                {
                    StringBuilder stringValue = new StringBuilder();
                    while (data[index] != 0)
                    {
                        stringValue.Append((char)data[index]);
                        index++;
                    }
                    //Debug.Log("Parsed string value: " + stringValue);
                    values.Add(new OSCValue(stringValue.ToString()));
                    // Align to the next 4-byte boundary
                    index = (index + 4) & ~3;
                }
                else
                {
                    //throw new InvalidOperationException("Unsupported OSC type tag: " + typeTag);
                }
            }

            return new OSCMessage(addressPattern.ToString(), values);
        }
    }
}
