import React, {
  Children, isValidElement, useCallback, useImperativeHandle, useRef, useMemo,
} from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import GBottomSheet, {
  BottomSheetModal, BottomSheetBackdrop,
  BottomSheetBackdropProps, BottomSheetView, BottomSheetFlatList,
} from '@gorhom/bottom-sheet';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface IBottomSheetControlProps {
  children: React.ReactNode;
  index?: number | undefined;
  testID?: string | undefined;
  isModal?: boolean | undefined;
  dragToDismiss?: boolean | undefined;
  initialSnapPoint?: number | undefined;
  isBackdropNeeded?: boolean | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  onChange?: ((index: number) => void) | undefined;
  onPressBackDrop?: (() => void) | undefined;
}

export interface IBottomSheetReferenceProps {
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
}

export {
  BottomSheetTextInput, BottomSheetFlatList,
} from '@gorhom/bottom-sheet';

const BottomSheet = React.forwardRef<IBottomSheetReferenceProps, IBottomSheetControlProps>(({
  children, index = -1, testID, isModal = true, dragToDismiss = true, initialSnapPoint,
  isBackdropNeeded = true, containerStyle, onChange, onPressBackDrop,
}: IBottomSheetControlProps, ref: React.Ref<IBottomSheetReferenceProps>) => {

  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  useImperativeHandle(ref, () => ({
    openBottomSheet() {
      openBottomSheet();
    },
    closeBottomSheet() {
      closeBottomSheet();
    },
  }));

  function openBottomSheet() {
    if (bottomSheetRef && bottomSheetRef.current) {
      if (isModal) {
        bottomSheetRef.current.present();
      } else {
        bottomSheetRef.current.expand();
      }
    }
  }

  const closeBottomSheet = useCallback(() => {
    if (bottomSheetRef && bottomSheetRef.current) {
      if (isModal) {
        bottomSheetRef.current.dismiss();
      } else {
        bottomSheetRef.current.close();
      }
    }
  }, [isModal]);

  const onClickBackDrop = useCallback(() => {
    closeBottomSheet();
    if (onPressBackDrop) {
      onPressBackDrop();
    }
  }, [closeBottomSheet, onPressBackDrop]);

  const renderBackdrop = useCallback(
    (backDropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...backDropProps}
        onPress={onClickBackDrop}
        pressBehavior={'close'}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.3} />
    ), [onClickBackDrop]);

  const snapPoints = (initialSnapPoint !== undefined) ?
    [initialSnapPoint, '100%'] : undefined;

  const hasBottomSheet = useMemo(() => {
    return hasBottomSheetFlatList(children);
  }, [children]);

  if (isModal) {
    return (
      <BottomSheetModal
        index={index < 0 ? 0 : index}
        ref={bottomSheetRef}
        stackBehavior={'push'}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        keyboardBehavior={'interactive'}
        keyboardBlurBehavior={'restore'}
        backgroundStyle={styles.transparent}
        handleIndicatorStyle={styles.transparent}
        enableContentPanningGesture={dragToDismiss}
        enableDynamicSizing={snapPoints === undefined}
        backdropComponent={isBackdropNeeded ? renderBackdrop : null}
        onChange={onChange}>
        <BottomSheetView
          testID={testID}
          style={[styles.container, {
            paddingBottom: insets.bottom,
          }, containerStyle]}>
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    );
  } else {
    return (
      <GBottomSheet
        index={index}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        keyboardBehavior={'interactive'}
        keyboardBlurBehavior={'restore'}
        handleIndicatorStyle={styles.transparent}
        enableContentPanningGesture={dragToDismiss}
        enableDynamicSizing={snapPoints === undefined}
        backgroundStyle={hasBottomSheet ? styles.background : styles.transparent}
        backdropComponent={isBackdropNeeded ? renderBackdrop : null}
        onChange={onChange}>
        {hasBottomSheet ? (children) : (
          <BottomSheetView
            testID={testID}
            style={[styles.container, {
              paddingBottom: insets.bottom,
            }, containerStyle]}>
            {children}
          </BottomSheetView>
        )}
      </GBottomSheet>
    );
  }
});

function hasBottomSheetFlatList(children: React.ReactNode): boolean {
  // Handle empty children
  if (!children) {
    return false;
  }

  // Convert to array for consistent handling
  const childrenArray = Children.toArray(children);

  // Check each child
  for (const child of childrenArray) {
    // Check if this element is a BottomSheetFlatList
    if (isValidElement(child)) {
      if (child.type === BottomSheetFlatList) {
        return true;
      }

      // If this element has children, recursively check them
      // Add proper type checking to avoid errors
      if (child.props && 'children' in child.props) {
        if (hasBottomSheetFlatList(child.props.children)) {
          return true;
        }
      }
    }
  }

  return false;
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
  },
});

export default BottomSheet;
