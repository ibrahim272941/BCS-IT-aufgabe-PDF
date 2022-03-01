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
  console.log(Object.values(invoice).length);
  return (
    <div>
      {Object.values(invoice).length === 8 ? (
        <View style={stylesBillTo.headerContainer}>
          <Text style={stylesBillTo.billTo}></Text>
          <Text>{invoice.costumerName}</Text>
          <Text>{invoice.costumerAddres}</Text>
          <Text>{invoice.costumerEmail}</Text>
          <Text>{invoice.costumerMobile}</Text>
        </View>
      ) : (
        <View style={stylesBillTo.headerContainer}>
          <Text style={stylesBillTo.billTo}></Text>
          <Text>{invoice[0].costumerName}</Text>
          <Text>{invoice[0].costumerAddres}</Text>
          <Text>{invoice[0].costumerEmail}</Text>
          <Text>{invoice[0].costumerMobile}</Text>
        </View>
      )}
    </div>
  );
};
export default BillTo;
