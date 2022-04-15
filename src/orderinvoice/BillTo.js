import { StyleSheet, Text, View } from '@react-pdf/renderer';

const stylesBillTo = StyleSheet.create({
  headerContainer: {
    marginTop: 36,
  },
  billTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontFamily: 'Helvetica-Oblique',
  },
});
const BillTo = ({ shipTo }) => {
  // console.log(Object.values(invoice).length);
  console.log(shipTo);
  return (
    <div>
      <View style={stylesBillTo.headerContainer}>
        <Text style={stylesBillTo.billTo}></Text>
        <Text>{shipTo.fullName}</Text>
        <Text>{shipTo.email}</Text>
        <Text>{shipTo.phoneNumber}</Text>
        <Text>{shipTo.address}</Text>
        <Text>
          {shipTo.postalCode}, {shipTo.country}
        </Text>
      </View>
      {/* {Object.values(invoice).length === 9 ? (
        <View style={stylesBillTo.headerContainer}>
          <Text style={stylesBillTo.billTo}></Text>
          <Text>{invoice.fullName}</Text>
          <Text>{invoice.address}</Text>
          <Text>{invoice.email}</Text>
          <Text>{invoice.phoneNumber}</Text>
          <Text>{invoice.country}</Text>
          <Text>{invoice.postalCode}</Text>
        </View>
      ) : (
        <View style={stylesBillTo.headerContainer}>
          <Text style={stylesBillTo.billTo}></Text>
          <Text>{invoice[0].costumerName}</Text>
          <Text>{invoice[0].costumerAddres}</Text>
          <Text>{invoice[0].costumerEmail}</Text>
          <Text>{invoice[0].costumerMobile}</Text>
        </View>
      )} */}
    </div>
  );
};
export default BillTo;
