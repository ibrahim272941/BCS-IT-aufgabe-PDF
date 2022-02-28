import { StyleSheet, Text, View } from "@react-pdf/renderer";

const borderColor = "#000";
const stylesTableFooter = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 30,
    fontSize: 12,
  },
  description: {
    width: "80%",
    textAlign: "right",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8,
    textDecoration: "underline",
    fontWeight: "900",
  },
  total: {
    width: "20%",
    textAlign: "center",
    fontSize: 12,
    paddingRight: 7,
  },
});
const InvoiceTableFooter = ({ items }) => {
  const subT = Object.values(items[0].invoice)
    .map((item) => item.productQuantity * item.productPrice)
    .reduce((sum, i) => sum + i, 0);

  let total = subT * 0.19 + subT;
  return (
    <View style={stylesTableFooter.row}>
      <Text style={stylesTableFooter.description}>TOTAL</Text>
      <Text style={stylesTableFooter.total}>{total.toFixed(2)}€</Text>
    </View>
  );
};
export default InvoiceTableFooter;
