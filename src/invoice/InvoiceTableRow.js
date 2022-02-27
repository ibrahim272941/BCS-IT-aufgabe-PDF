import { StyleSheet, Text, View } from "@react-pdf/renderer";
const borderColor = "#90e5fc";
const stylesTableRow = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  description: {
    width: "60%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  qty: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  rate: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  amount: {
    width: "15%",
    textAlign: "right",
    paddingRight: 8,
  },
});

const InvoiceTableRow = ({ items }) => {
  console.log(items[0]);

  return (
    <View style={stylesTableRow.row}>
      <Text style={stylesTableRow.description}>{items[0].productName}</Text>
      <Text style={stylesTableRow.qty}>{items[0].productQuantity}</Text>
      <Text style={stylesTableRow.rate}>{items[0].productPrice}</Text>
      <Text style={stylesTableRow.totalAmount}>{items[0].totalAmount}</Text>
    </View>
  );
};
export default InvoiceTableRow;
