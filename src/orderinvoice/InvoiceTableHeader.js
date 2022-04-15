import { StyleSheet, Text, View } from '@react-pdf/renderer';

const stylesTableHeader = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#000',
    // backgroundColor: "#525659",
    borderBottomWidth: 1,
    paddingTop: 5,
    height: 24,
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    color: '#000',
  },
  img: {
    width: '25%',

    textAlign: 'center',
    paddingRight: 8,
  },
  description: {
    width: '50%',
    textAlign: 'center',

    paddingLeft: 8,
  },
  qty: {
    width: '25%',

    textAlign: 'center',
    paddingRight: 8,
  },

  amount: {
    width: '25%',
    textAlign: 'center',
    paddingRight: 8,
    marginLeft: 6,
  },
});

const InvoiceTableHeader = () => (
  <View style={stylesTableHeader.container}>
    <Text style={stylesTableHeader.img}>Image</Text>
    <Text style={stylesTableHeader.description}>Product</Text>
    <Text style={stylesTableHeader.qty}>Qty</Text>
    {/* <Text style={stylesTableHeader.rate}>Price</Text> */}
    {/* <Text style={stylesTableHeader.tax}>Tax</Text> */}
    <Text style={stylesTableHeader.amount}>Sum</Text>
  </View>
);
export default InvoiceTableHeader;
