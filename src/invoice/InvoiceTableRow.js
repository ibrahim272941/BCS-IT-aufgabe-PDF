import { StyleSheet, Text, View } from "@react-pdf/renderer";

const stylesTableRow = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#7F7F7F",
    borderBottomWidth: 1,
    paddingTop: 5,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  description: {
    width: "40%",
    textAlign: "center",
    borderRight: "2px solid",

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
  },
  tax: {
    width: "15%",
    textAlign: "center",
  },
});

const InvoiceTableRow = ({ items }) => {
  console.log(Object.values(items[0].invoice));
  const invoice = Object.values(items[0].invoice);
  console.log(invoice);
  return (
    <div>
      {invoice.length === 9 ? (
        <View style={stylesTableRow.row}>
          <Text style={stylesTableRow.description}>{invoice[5]}</Text>
          <Text style={stylesTableRow.qty}>{invoice[7]}</Text>
          <Text style={stylesTableRow.rate}>{invoice[6]}€</Text>
          {/* <Text style={stylesTableRow.tax}>%19</Text> */}
          <Text style={stylesTableRow.amount}>{invoice[8]}€</Text>
        </View>
      ) : (
        invoice.map((items, i) => {
          return (
            <View key={i} style={stylesTableRow.row}>
              <Text style={stylesTableRow.description}>
                {items.productName}
              </Text>
              <Text style={stylesTableRow.qty}>{items.productQuantity}</Text>
              <Text style={stylesTableRow.rate}>{items.productPrice}€</Text>
              {/* <Text style={stylesTableRow.tax}>%19</Text> */}
              <Text style={stylesTableRow.amount}>
                {items.productQuantity * items.productPrice}€
              </Text>
            </View>
          );
        })
      )}
    </div>
  );
};
export default InvoiceTableRow;
