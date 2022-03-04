import { StyleSheet, View } from "@react-pdf/renderer";

import InvoiceTableFooter from "./InvoiceTableFooter";
import InvoiceTableHeader from "./InvoiceTableHeader";
import InvoiceTableRow from "./InvoiceTableRow";

const tableRowsCount = 11;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#000",
  },
});

const InvoiceItemsTable = (invoice) => {
  const inv = invoice.invoice;
  console.log(Object.values(inv).length);
  console.log();
  return (
    <View style={styles.tableContainer}>
      <InvoiceTableHeader />
      <InvoiceTableRow items={[invoice]} />
      {/* <InvoiceTableBlankSpace rowsCount={tableRowsCount - invoice.length} /> */}
      {Object.values(inv).length !== 9 && (
        <InvoiceTableFooter items={[invoice]} />
      )}
    </View>
  );
};
export default InvoiceItemsTable;
