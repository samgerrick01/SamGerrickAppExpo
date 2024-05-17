/**
 * Enum representing different screens in the application.
 *
 * @author {Micah}
 * @returns {Screens}
 */

export enum Screen {
  SPLASH_SCREEN = 'SplashScreen',
  TRANSLATION_SCREEN = 'TranslationScreen',
  GET_STARTED_SCREEN = 'GetStartedScreen',

  LOGIN_SCREEN = 'LoginScreen',
  REGISTRATION_SCREEN = 'RegistrationScreen',
  FORGET_PASSWORD_SCREEN = 'ForgotPassword',

  WELCOME_SCREEN = 'WelcomeScreen',
  HOME_SCREEN = 'HomeScreen',

  SEARCH_SCREEN = 'SearchScreen',
  SEARCH_RESULT_SCREEN = 'SearchResultScreen',

  LOCATION_SCREEN = 'LocationScreen',
  CONFIRM_LOCATION_SCREEN = 'ConfirmLocationScreen',
  MAP_SCREEN = 'MapScreen',

  PRODUCT_LIST_SCREEN = 'ProductListScreen',
  PRODUCT_DETAILS_SCREEN = 'ProductDetailsScreen',

  CHECK_OUT_SCREEN = 'CheckOutScreen',
  PAYMENT_SCREEN = 'PaymentScreen',
  ADD_CARD_PAYMENT_SCREEN = 'AddCardPaymentScreen',
  PAYMENT_SUCCESS_SCREEN = 'PaymentSuccessScreen',
  ADD_RATING_SCREEN = 'AddRatingScreen',

  PIN_SCREEN = 'PinScreen',

  EDIT_PROFILE_SCREEN = 'EditProfileScreen',
  BOOK_MARK_LIST_SCREEN = 'BookMarkListScreen',

  TAB_NAVIGATOR = 'TabNavigator',
  DRAWER_NAVIGATOR = 'DrawerNavigator',

  OFFERS_SCREEN = 'OffersScreen',
  ADDRESS_SCREEN = 'AddressScreen',
  ADD_EDIT_ADDRESS_SCREEN = 'AddEditAddressScreen',
  ORDER_DETAILS_SCREEN = 'OrderDetailsScreen',
  NOTIFICATION_SCREEN = 'NotificationScreen',
  SETTING_SCREEN = 'SettingsScreen',
  CHAT_SCREEN = 'ChatScreen',
  HELP_SCREEN = 'HelpScreen',

  HOME_TAB = 'Home',
  CART_TAB = 'Cart',
  ORDERS_TAB = 'My orders',
  ACCOUNT_TAB = 'Account',

  UPLOAD_PRESCRIPTION_SCREEN = 'UploadPrescriptionScreen',
  UPLOADED_PRESCRIPTION_SCREEN = 'UploadedPrescriptionScreen',

  SUCCESS_ORDER_SCREEN = 'SuccessOrderScreen',

  // For navigating to cart screen
  EMPTY_COMPONENT = 'EmptyComponent',
}
