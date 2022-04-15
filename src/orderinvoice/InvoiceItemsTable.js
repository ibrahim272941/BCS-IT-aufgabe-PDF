import { StyleSheet, View } from '@react-pdf/renderer';

import InvoiceTableFooter from './InvoiceTableFooter';
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableRow from './InvoiceTableRow';

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
    // borderWidth: 1,
    // borderColor: "#000",
  },
});

const InvoiceItemsTable = ({ invoice }) => {
  console.log(invoice.cart);
  return (
    <View style={styles.tableContainer}>
      <InvoiceTableHeader />
      <InvoiceTableRow items={invoice.cart} />

      {/* {Object.values(inv).length !== 9 && (
        <InvoiceTableFooter items={[invoice]} />
      )} */}
      <InvoiceTableFooter items={invoice.cart} />
    </View>
  );
};
export default InvoiceItemsTable;
