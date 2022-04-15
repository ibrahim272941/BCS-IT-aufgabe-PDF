import { StyleSheet, Text, View } from "@react-pdf/renderer";

const stylesMessage = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: 100,
  },
  reportTitle: {
    fontSize: 12,
    textAlign: "center",
  },
});

const InvoiceThankYouMsg = () => (
  <View style={stylesMessage.titleContainer}>
    <Text style={stylesMessage.reportTitle}>
      {" "}
      Thanks for shopping at BCS-IT. We hope to have the pleasure of doing
      business with you in the future.
    </Text>
  </View>
);

export default InvoiceThankYouMsg;
