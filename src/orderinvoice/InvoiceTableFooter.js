import { StyleSheet, Text, View } from '@react-pdf/renderer';

const stylesTableFooter = StyleSheet.create({
  pdfFooter: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'flex-end',

    width: '100%',
  },
  row: {
    flexDirection: 'row',

    borderBottomColor: '#7F7F7F',
    borderBottomWidth: 1,
    alignItems: 'left',
    height: 20,
    fontSize: 12,
    fontWeight: 'black',
    textAlign: 'left',
    width: '40%',

    marginLeft: 287,
  },
  description: {
    width: '50%',
    textAlign: 'right',
    // borderRightColor: borderColor,
    // borderRightWidth: 1,
    // paddingRight: 8,
    // textDecoration: "underline",
    marginRight: 8,
  },
  total: {
    width: '50%',
    textAlign: 'left',
    fontSize: 12,
    marginLeft: 9,
  },
});
const InvoiceTableFooter = ({ items }) => {
  // const subT = Object.values(items[0].invoice)
  //   .map((item) => item.productQuantity * item.productPrice)
  //   .reduce((sum, i) => sum + i, 0);
  // console.log(items);
  // let total = subT * 0.19 + subT;
  // const amount = new Intl.NumberFormat("de-DE", {
  //   style: "currency",
  //   currency: "EUR",
  // }).format(total);
  const subT = items
    .map((item) => parseFloat(item.price))
    .reduce((sum, i) => sum + i, 0);
  console.log(subT);
  // let total = subT * 0.19 + subT;
  const amount = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(subT);
  return (
    <View style={stylesTableFooter.pdfFooter}>
      <View style={stylesTableFooter.row}>
        <Text style={stylesTableFooter.description}>Tax:</Text>
        <Text style={stylesTableFooter.total}>{(subT * 0.19).toFixed(2)}€</Text>
      </View>
      <View style={stylesTableFooter.row}>
        <Text style={stylesTableFooter.description}>Total Amount:</Text>
        <Text style={stylesTableFooter.total}>{amount}</Text>
      </View>
    </View>
  );
};
export default InvoiceTableFooter;
