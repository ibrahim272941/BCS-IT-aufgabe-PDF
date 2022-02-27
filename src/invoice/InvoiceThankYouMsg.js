import { StyleSheet, Text, View } from "@react-pdf/renderer";

const stylesMessage = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  reportTitle: {
    fontSize: 12,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

const InvoiceThankYouMsg = () => (
  <View style={stylesMessage.titleContainer}>
    <Text style={stylesMessage.reportTitle}>Thank you for your business</Text>
  </View>
);

export default InvoiceThankYouMsg;
