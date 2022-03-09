import { StyleSheet, Text, View } from "@react-pdf/renderer";

const stylesTableHeader = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#000",
    // backgroundColor: "#525659",
    borderBottomWidth: 1,
    paddingTop: 5,
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
    color: "#000",
  },
  description: {
    width: "40%",
    textAlign: "center",

    paddingLeft: 8,
  },
  qty: {
    width: "10%",

    textAlign: "center",
    paddingRight: 8,
  },
  rate: {
    width: "25%",

    textAlign: "center",
    paddingRight: 8,
  },
  amount: {
    width: "25%",
    textAlign: "center",
    paddingRight: 8,
    marginLeft: 6,
  },
  tax: {
    width: "15%",
    textAlign: "center",
  },
});

const InvoiceTableHeader = () => (
  <View style={stylesTableHeader.container}>
    <Text style={stylesTableHeader.description}>Product</Text>
    <Text style={stylesTableHeader.qty}>Qty</Text>
    <Text style={stylesTableHeader.rate}>Price</Text>
    {/* <Text style={stylesTableHeader.tax}>Tax</Text> */}
    <Text style={stylesTableHeader.amount}>Sum</Text>
  </View>
);
export default InvoiceTableHeader;
