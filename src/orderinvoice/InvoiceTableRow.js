import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import logo from '../invoice/logo.png';

const stylesTableRow = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#7F7F7F',
    borderBottomWidth: 1,
    paddingTop: 5,
    alignItems: 'center',
    height: 35,
    fontStyle: 'bold',
  },
  // img: {
  //   width: '20%',
  // },
  description: {
    width: '50%',
    textAlign: 'center',
    borderRight: '2px solid',

    paddingLeft: 8,
  },
  qty: {
    width: '25%',

    textAlign: 'center',
    paddingRight: 8,
  },
  rate: {
    width: '25%',

    textAlign: 'center',
    paddingRight: 8,
  },
});

const InvoiceTableRow = ({ items }) => {
  // console.log(Object.values(items[0].invoice));
  // const invoice = Object.values(items[0].invoice);
  console.log(items[0].img);
  return (
    <div>
      {items.map((item, i) => {
        return (
          <View key={i} style={stylesTableRow.row}>
            {/* <Text style={stylesTableRow.img}>
            </Text> */}
            {/* <Image
              style={stylesTableRow.img}
              src="https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_88232402/fee_786_587_png"
              alt="img"
            /> */}
            <Text style={stylesTableRow.description}>{item.productTitle}</Text>
            <Text style={stylesTableRow.qty}>{item.quantity}</Text>
            <Text style={stylesTableRow.rate}>{item.price}€</Text>
          </View>
        );
      })}
    </div>
  );
  //   <div>
  //     {invoice.length === 9 ? (
  //       <View style={stylesTableRow.row}>
  //         <Text style={stylesTableRow.description}>{invoice[5]}</Text>
  //         <Text style={stylesTableRow.qty}>{invoice[7]}</Text>
  //         <Text style={stylesTableRow.rate}>{invoice[6]}€</Text>
  //         {/* <Text style={stylesTableRow.tax}>%19</Text> */}
  //         <Text style={stylesTableRow.amount}>{invoice[8]}€</Text>
  //       </View>
  //     ) : (
  //       invoice.map((items, i) => {
  //         return (
  //           <View key={i} style={stylesTableRow.row}>
  //             <Text style={stylesTableRow.description}>
  //               {items.productName}
  //             </Text>
  //             <Text style={stylesTableRow.qty}>{items.productQuantity}</Text>
  //             <Text style={stylesTableRow.rate}>{items.productPrice}€</Text>
  //             {/* <Text style={stylesTableRow.tax}>%19</Text> */}
  //             <Text style={stylesTableRow.amount}>
  //               {items.productQuantity * items.productPrice}€
  //             </Text>
  //           </View>
  //         );
  //       })
  //     )}
  //   </div>
  // );
};
export default InvoiceTableRow;
