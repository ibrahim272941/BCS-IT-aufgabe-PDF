import { StyleSheet, Text, View } from "@react-pdf/renderer";

const stylesBillTo = StyleSheet.create({
  headerContainer: {
    marginTop: 36,
  },
  billTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontFamily: "Helvetica-Oblique",
  },
});
const BillTo = ({ invoice }) => {
  console.log(invoice.costumerName);
  return (
    <View style={stylesBillTo.headerContainer}>
      <Text style={stylesBillTo.billTo}>Bill To:</Text>
      <Text>{invoice.costumerName}</Text>
      <Text>{invoice.costumerAddres}</Text>
      <Text>{invoice.costumerEmail}</Text>
      <Text>{invoice.costumerMobile}</Text>
    </View>
  );
};
export default BillTo;
