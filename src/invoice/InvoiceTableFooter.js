import { StyleSheet, Text, View } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const stylesTableFooter = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontSize: 12,
    fontStyle: "bold",
  },
  description: {
    width: "85%",
    textAlign: "right",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8,
  },
  total: {
    width: "15%",
    textAlign: "right",
    paddingRight: 8,
  },
});
const InvoiceTableFooter = ({ items }) => {
  const total = items
    .map((item) => item.qty * item.rate)
    .reduce((acc, val) => acc + val, 0);
  return (
    <View style={stylesTableFooter.row}>
      <Text style={stylesTableFooter.description}>TOTAL</Text>
      <Text style={stylesTableFooter.total}>
        {Number.parseFloat(total).toFixed(2)}
      </Text>
    </View>
  );
};
export default InvoiceTableFooter;
