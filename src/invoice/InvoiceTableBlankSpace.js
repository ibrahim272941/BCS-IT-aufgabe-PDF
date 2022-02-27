import { StyleSheet, Text, View } from "@react-pdf/renderer";
const borderColor = "#90e5fc";
const stylesBlankSpace = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
    color: "white",
  },
  description: {
    width: "60%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  qty: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  rate: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  amount: {
    width: "15%",
  },
});
const InvoiceTableBlankSpace = ({ rowsCount }) => {
  const blankRows = Array(rowsCount).fill(0);
  return (
    <div>
      {blankRows.map((x, i) => (
        <View style={stylesBlankSpace.row} key={`BR${i}`}>
          <Text style={stylesBlankSpace.description}>-</Text>
          <Text style={stylesBlankSpace.qty}>-</Text>
          <Text style={stylesBlankSpace.rate}>-</Text>
          <Text style={stylesBlankSpace.amount}>-</Text>
        </View>
      ))}
    </div>
  );
};
export default InvoiceTableBlankSpace;
