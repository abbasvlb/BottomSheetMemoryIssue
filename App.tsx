import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { clearBase, saveProductList } from './base';
import { store } from './store';
import BottomSheet, { IBottomSheetReferenceProps } from './bottomsheet';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


function OrderHome({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const productList = useSelector((state: any) => state.productList);

  const bottomSheetRef = useRef<IBottomSheetReferenceProps>(null);

  function onPressCloseCall() {
    // Open the bottom sheet using the ref
    bottomSheetRef.current?.openBottomSheet?.();
  }

  function onPressCloseCallDirect() {
    dispatch(clearBase());
    navigation.navigate('Home');
  }

  function onPressFinalCloseCall() {
    bottomSheetRef.current?.closeBottomSheet?.();
    
    dispatch(clearBase());
    
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Order Screen'}</Text>
      <Text style={styles.counter}>{`${productList.length} data loaded.`}</Text>
      <Button title="Direct Close Call" onPress={onPressCloseCallDirect} />
      <View style={{ height: 100 }} />
      <Button title="Close Call with Bottom Sheet" onPress={onPressCloseCall} />
      <View style={styles.scrollView}>
        <ScrollView>
          {productList.map((item: any, index: number) => (
            <Text key={index}>{item.productName}</Text>
          ))}
        </ScrollView>
      </View>
      {/* Always render the BottomSheet */}
      <BottomSheet
        ref={bottomSheetRef}
        onPressBackDrop={() => bottomSheetRef.current?.closeBottomSheet?.()}>
        <View style={styles.bottmSheetContainer}>
          <Button title="Close Call" onPress={onPressFinalCloseCall} />
        </View>
      </BottomSheet>
    </View>
  );
}

function RetailerActivity({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const productList = useSelector((state: any) => state.productList);

  useEffect(() => {
    console.log('Activity mounted');

    return () => {
      console.log('Activity unmounted');
    };
  }, []);

  function onPressLoadData() {
    const arrData: any[] = [];
    for (let index = 0; index < 2600; index++) {
      arrData.push({
        'productID': 1516 + index,
        'productCode': '8765',
        'productName': 'AB Pants LG 2s',
        'parentId': 1515,
        'SIH': 0,
        'DSIH': 0,
        'freeSIH': 0,
        'productShortName': 'AB Pants LG 2s',
        'barCode': '',
        'isPromotionalPrice': false,
        'bbuCP': 0,
        'bbuDP': 115.25,
        'bbuRP': 115.25,
        'bbuMasterRP': 115.25,
        'bbuMasterDP': 115.25,
        'srp': 115.25,
        'tempSrp': 115.25,
        'prevSRP_piece': 115.25,
        'csrp': 1152.5,
        'prevSRP_case': 1152.5,
        'osrp': 0,
        'prevSRP_outer': 0,
        'cprice': 0,
        'MSQty': 1,
        'caseSize': 10,
        'caseUomId': 10898,
        'OU': 'CASE',
        'MRP': 10,
        'SDP': 10,
        'sbdGroupName': '',
        'RField1': '',
        'minimumSellingQuantity': '',
        'WSIH': 0,
        'WSIT': 0,
        'isMustSell': 0,
        'isFocusBrand': 0,
        'isFocusBrand2': 0,
        'outersize': 1,
        'outerUomId': 31249,
        'casebarcode': '',
        'outerbarcode': '',
        'pcUomid': 10899,
        'batchwiseProductCount': 0,
        'isSaleable': 1,
        'isReturnable': 0,
        'typeID': 0,
        'baseprice': 10,
        'groupid': 0,
        'isNMustSell': 0,
        'productWeight': '5',
        'hasSerialNo': 0,
        'isFocusBrand3': 0,
        'isFocusBrand4': 0,
        'isSMP': 0,
        'tagdescription': '[]',
        'isNearExpiryTaggedProduct': 0,
        'priceoffvalue': null,
        'priceOffId': null,
        'ASRP': null,
        'availableinWareHouse': false,
        'hsnId': 388,
        'hsnCode': '77',
        'isDrug': 0,
        'parentHierarchy': '/1403/1406/1513/1514/1515/1516/',
        'mTradePromotion': '0',
        'locations': [
          {
            'locationId': 10886,
            'nearExpiryDate': [],
            'productid': '1516',
            'shelfpqty': '',
            'shelfcqty': '',
            'whpqty': 0,
            'whcqty': 0,
            'whoqty': 0,
            'shelfoqty': '',
            'isDistributed': 0,
            'isListed': 0,
            'reasonID': 0,
            'priceCompilanceReasonID': -1,
            'audit': 0,
            'isOwn': 0,
            'facing': '',
            'pouring': 0,
            'cocktail': 0,
            'menuCode': '',
            'availability': -1,
            'osaAuditReasonId': 0,
            'osaDays': 0,
            'priceTagAvailability': 0,
            'prevSRP_outer': '0',
            'prevSRP_piece': '0',
            'prevSRP_case': '0',
            'priceCompliance': -1,
            'mrp_outer': '',
            'srp_outer': '',
            'mrp_piece': '',
            'srp_piece': '',
            'mrp_case': '',
            'srp_case': '',
            'priceChangeReasonID': -1,
            'priceMOP': 0,
            'priceChanged': -1,
            'prevMRP_outer': '0',
            'prevMRP_piece': '0',
            'prevMRP_case': '0',
          },
        ],
        'marginPrice': null,
        'marginPercentage': '',
        'priceMarginGroupID': '',
        'RField2': '',
        'RField3': null,
        'RField4': '0',
        'RField5': '0',
        'RField6': '0',
        'RField7': '0',
        'RField8': '0',
        'RField9': '0',
        'RField10': '0',
        'RField11': '0',
        'prodMetricId': 30889,
        'isDirectTax': 0,
        'taxMetricId': 0,
        'taxWeight': 0,
        'own': 1,
        'isPurchased': 0,
        'isSBD': false,
        'isSBDAcheived': false,
        'isOuter': false,
        'isCase': false,
        'isPiece': false,
        'productTagColorList': {},
        'productTaggingSequence': null,
        'soInventory': 0,
        'ico': 0,
        'foc': 0,
        'orderedPcsQty': '',
        'orderedCaseQty': '',
        'orderedOuterQty': '',
        'totalValue': 0,
        'retailerWiseProductWiseP4Qty': '0,0,0,0',
        'retailerWiseP4StockQty': '0,0,0,0',
        'socInventory': 0,
        'minimumOrdQuantity': 0,
        'itemLevelPtr': [],
        'totalOrderedQtyInPieces': 0,
        'lineValue': 0,
        'netValue': 0,
        'lineValueAfterSchemeApplied': 0,
        'grossValue': 0,
        'applyValue': 0,
        'focQty': 0,
        'focPsQty': 0,
        'focCsQty': 0,
        'focOuQty': 0,
        'replacementQty': 0,
        'taxableAmount': 0,
        'isPromo': false,
        'localOrderCaseQty': 0,
        'localOrderPieceQty': 0,
        'localOrderOuterQty': 0,
        'batchId': '0',
        'maxMRPProductID': '0',
        'isDiscountable': 0,
        'totalEmptyReturnQty': 0,
        'appliedSchCount': 0,
        'discountValue': 0,
        'schemeProducts': [],
        'creditNoteNetValue': 0,
        'attributeList': [],
        'orderedProductSchemes': [],
        'prodCategoryId': 0,
        'D1': 0,
        'DA': 0,
        'productEntryCalculatedDiscountValue': 0,
        'indicativeOrder_op': 0,
        'indicativeOrder_oc': 0,
        'indicativeOrder_oo': 0,
        'indicative_srp': 0,
        'indicative_Csrp': 0,
        'indicative_osrp': 0,
        'isIndicativeOrder': false,
        'isFreeOrder': false,
        'isAvailableinFoc': false,
        'soReasonID': 0,
        'focReasonID': 0,
        'batchList': [],
        'pickListAllocatedQty': '0',
        'allocatedPickListCaseQty': '0',
        'allocatedPickListOuterQty': '0',
        'allocatedPickListPcsQty': '0',
        'partialDeliveredQty': '0',
        'tmp_totalAmt': '0',
        'tmp_orderedCaseQty': '0',
        'tmp_orderedOuterQty': '0',
        'tmp_orderedPcsQty': '0',
        'imagePath': '',
        'sdpWithOutTax': 0,
        'totalTaxRate': 0,
      });
    }
    dispatch(saveProductList(arrData));
    navigation.navigate('Order')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Retailer Activity Screen'}</Text>
      <Text style={styles.counter}>{`${productList.length} data loaded.`}</Text>
      <Button title="Load Products and Goto Order" onPress={onPressLoadData} />
    </View>
  );
}

function HomeScreen({ navigation }: { navigation: any }) {
  useEffect(() => {
    console.log('Home mounted');

    return () => {
      console.log('Home unmounted');
    };
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Home Screen'}</Text>
      <Button
        title="HomeScreen"
        onPress={() => navigation.navigate('Activity')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GestureHandlerRootView style={styles.gestureView}>
          <BottomSheetModalProvider>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Activity" component={RetailerActivity} />
              <Stack.Screen name="Order" component={OrderHome} />
            </Stack.Navigator>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  gestureView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 50,
  },
  counter: {
    marginBottom: 50,
  },
  scrollView: {
    height: 200,
    marginTop: 50,
  },
  bottmSheetContainer: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
