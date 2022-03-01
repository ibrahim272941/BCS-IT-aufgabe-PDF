import { StyleSheet, Text, View } from "@react-pdf/renderer";
const borderColor = "#000";
const stylesTableRow = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
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
      {invoice.length === 8 ? (
        <View style={stylesTableRow.row}>
          <Text style={stylesTableRow.description}>{invoice[4]}</Text>
          <Text style={stylesTableRow.qty}>{invoice[6]}</Text>
          <Text style={stylesTableRow.rate}>{invoice[5]}€</Text>
          <Text style={stylesTableRow.tax}>%19</Text>
          <Text style={stylesTableRow.amount}>{invoice[7]}€</Text>
        </View>
      ) : (
        invoice.map((items) => {
          return (
            <View style={stylesTableRow.row}>
              <Text style={stylesTableRow.description}>
                {items.productName}
              </Text>
              <Text style={stylesTableRow.qty}>{items.productQuantity}</Text>
              <Text style={stylesTableRow.rate}>{items.productPrice}€</Text>
              <Text style={stylesTableRow.tax}>%19</Text>
              <Text style={stylesTableRow.amount}>{items.totalAmount}€</Text>
            </View>
          );
        })
      )}
    </div>
  );
};
export default InvoiceTableRow;
