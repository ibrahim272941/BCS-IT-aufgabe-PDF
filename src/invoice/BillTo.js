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
  // console.log(invoice[0].costumerName);
  return (
    <View style={stylesBillTo.headerContainer}>
      <Text style={stylesBillTo.billTo}></Text>
      <Text>{invoice[0].costumerName}</Text>
      <Text>{invoice[0].costumerAddres}</Text>
      <Text>{invoice[0].costumerEmail}</Text>
      <Text>{invoice[0].costumerMobile}</Text>
    </View>
  );
};
export default BillTo;
