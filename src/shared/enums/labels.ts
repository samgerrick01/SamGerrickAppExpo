export enum Labels {
  //PAGE TITLE
  ACCOUNT = 'Account',
  CART = 'My Cart',
  UPLOAD_PRESCRIPTION = 'Upload Prescription',
  CHECKOUT = 'Checkout',

  ITEMS = 'ITEMS',
  ORDERED_ON = 'ORDERED ON',
  YOUR_ORDER = 'Your Order',
  TOTAL_AMOUNT = 'Total Amount',
  OR = 'Or',
  USERNAME = 'Email or Mobile number',
  PASSWORD = 'Password',
  CONFIRM_PASSWORD = 'Confirm password',
  REGISTER = 'Register',
  SIGN_UP = 'Sign Up',
  CANCEL = 'Cancel',
  RECIPIENTS_NAME = 'Recipients Name',
  CONTACT_NUMBER = 'Contact number',
  EMAIL = 'Email address',
  FIRST_NAME = 'First Name',
  LAST_NAME = 'Last Name',
  ADDRESS = 'Region/Province/City/Barangay',

  BIRTHDAY = 'Birthday',
  MOBILE = 'Mobile number',

  //SPLASH
  BEST_PRICE = 'Best price guarantee',
  QUALITY = 'Quality assurance',
  NO_MINIMUM = 'No minimum buy',

  // REGISTER
  PASSWORD_NOTE = 'Password should have 8 to 12 characters. Best passwords are a combination of letters, numbers, or symbols',

  //LOGIN
  LOGIN = 'Log In',
  FORGOT_PASSWORD_TEXT = 'We will send you a message to set or reset your new password',

  //FORGET PASSWORD
  EMAIL_SENT = 'Email has been sent.',

  //LOGOUT
  LOGOUT = 'Are you sure you want to log out?',
  LOGOUT_HEADER = 'Log Out?',

  //OTP
  OTP_TITLE = 'Enter 6 Digit OTP',
  OTP_HEADER = 'Enter the OTP code from the phone we just sent you.',
  OTP_NOT_RECEIVE = "Didn't receive OTP Code?",

  // HOME SCREEN
  CATEGORIES = 'Categories',
  DEALS_OF_THE_DAY = 'Deals of the day',
  POPULAR_MEDICINE = 'Popular Medicine',
  TRENDING_STORE = 'Trending Store',
  OUT_OF_STOCK = 'Out of stock',
  RECOMMENDED_ITEMS = 'Recommended Items',
  RECOMMENDED_PRODUCTS = 'Recommended Products',

  //PRODUCT DETAILS
  SELECT_MEDICINE = 'Select Medicine',
  DESCRIPTION = 'Description',
  ADDITIONS = 'Additions',
  INGREDIENTS = 'Ingredients',
  NUTRITIONAL_VALUE = 'Nutritional Value',
  DAILY_VALUE = '*Daily Value',
  PRESCRIPTION = 'Prescription Required',
  TOTAL_PRICE = 'Total Price',

  //CART
  PRODUCT_ADD_CART_SUCCESS = 'Product added to cart',
  PRODUCT_ADD_CART_FAILED = 'Failed to add product to cart',
  DELETE_ITEMS = 'Delete Items?',
  DELETE_ITEMS_DESCRIPTION = 'Are you sure to remove the products from your cart?',
  CONFIRM_DELETE_MODAL = 'Yes, delete items',
  DECLINE_DELETE_MODAL = 'No, don’t delete',
  PRESCRIPTION_REQUIRED = 'This item requires prescription',
  SELECTED_ITEMS_DELETED = 'Selected items has been deleted',
  CANNOT_EXCEED_STOCK = 'You cannot exceed available stock',

  //ADDRESS
  HOME_TITLE = 'Home',
  OFFICE_TITLE = 'Office',
  SELECT_LOCATION = 'SELECT LOCATION',
  SAVED_ADDRESSES = 'SAVED ADDRESSES',
  EDIT_ADDRESS = 'EDIT ADDRESS',
  SET_DELIVERY_LOCATION = 'SET DELIVERY LOCATION',
  ADDRESS_BOOK = 'ADDRESS BOOK',
  SAVE = 'Save',
  EDIT_ADDRESS_LIST = 'Edit address list',
  LOCATION_TYPE = 'Location Type',
  SET_AS_DEFAULT_ADDRESS = 'Set as default address',
  LANDMARK = 'Landmark (Optional)',
  ZIPCODE = 'Zip code',
  ADD_NEW_ADDRESS = 'Add New Address',
  ADD_ADDRESS = 'ADD ADDRESS',
  CONFIRM = 'Confirm',
  NONE = 'NONE',
  DELETE = 'DELETE',
  YES_DELETE = 'Yes, delete address',
  CANCEL_DELETE = "No, don't delete",
  STATIC_ADDRESS = '123, Area, City Name, Country',
  REGION = 'Region',
  PROVINCE = 'Province',
  CITY = 'City',
  BARANGAY = 'Barangay',
  STREET = 'House/Floor Number/Street',
  NAME = "Recipient's name",

  //LOCATION
  CURRENT_LOCATION = 'Current Location',
  NCR = 'NCR',

  //Welcome
  WELCOME_TITLE = 'Welcome\nPharmacy!',
  WELCOME_BODY = 'Unlock the world of regular and rescued pharmacy by setting up your delivery address.',

  //PROFILE SCREEN
  PHONE_NUMBER = '09XXXXXXXXX',
  PROFILE_SCREEN = 'Personal Details',
  EDIT = 'Edit',
  EDIT_PROFILE_SUCCESS = 'Profile has been updated',
  SEND_FEEDBACK = 'Send Feedback',
  REPORT_AN_EMERGENCY = 'Report an Emergency',
  RATE_US_ON_THE_PLAYSTORE = 'Rate us on the Play Store',
  LOG_OUT = 'Log Out',
  UPDATE_FAILED = 'Update failed. Please refresh the page',

  EDIT_PROFILE_SCREEN = 'Password should have 8 to 12 characters. Best passwords are a combination of letters, numbers, or symbols',

  //EDIT ADDRESS MODAL
  EDIT_ADDRESS_TITLE = ' The default address cannot be deleted. You can set another address first as a default address instead before deleting this address',
  EDIT_DELETE_TITLE = 'The default address cannot be deleted. You can set another address first as a default address instead before deleting this address',
  HEADER_EDIT_CANNOT_ADDRESS = 'Cannot delete default address',
  HEADER_DELETE_ADDRESS = 'Delete Address?',
  HEADER_CANNOT_DELETE_ADDRESS = 'Cannot delete default address',
  WORK = 'Work',
  HOME = 'HOME',
  DEFAULT_ADDRESS = 'DEFAULT ADDRESS',
  EMPTY_ADDRESS = 'Please add/select an address',

  SELECT_ALL = 'Select all',
  LEFT_IN_STOCK = 'left in stock',

  EMPTY_CART_TITLE = 'Your cart is empty',
  EMPTY_CART_DESCRIPTION = 'Looks like you haven’t added any products you like yet.',
  RESULT = 'Result',

  //SEARCH
  EMPTY_SEARCH_TITLE = 'You got lost!',
  EMPTY_SEARCH_DESCRIPTION = 'We can’t seem to find what you’re looking for',
  RECENT_SEARCHES = 'Recent Searches',

  //ORDER
  MY_ORDERS = 'My Orders',
  QUANTITY = 'Quantity',
  SHIPPING_OPTION = 'Shipping option',
  STANDARD_DELIVERY = 'Standard Delivery',
  PAYMENT_METHOD = 'Payment Method',
  PRESCRIPTION_TITLE = 'Prescriptions',
  ORDER_DETAILS = 'Order details',
  CASH_ON_DELIVERY = 'Cash on Delivery',
  ORDER_ID = 'Order ID',
  ORDER_TIME = 'Order time',
  SHIP_TIME = 'Ship time',
  COMPLETED_TIME = 'Completed time',
  TOTAL = 'Total',
  CANCELLED = 'Cancelled',
  CANCELLED_TIME = 'Cancelled time',
  VIEW_PRESCRIPTIONS = 'View prescriptions',
  PRESCRIPTIONS_UPLOADED_V1 = 'Prescription(s) uploaded',
  PRESCRIPTIONS_UPLOADED_V2 = 'Prescriptions uploaded',
  UPLOADED_PRESCRIPTION = 'Uploaded Prescriptions',
  REMARKS = 'Remarks',
  SEE_MORE = 'See more',
  SEE_LESS = 'See less',

  //Checkout
  DELIVERY_OPTION = 'Delivery option',
  ORDER_STATUS = 'Order Status',
  REQUIRES_PRESCRIPTION = 'This item requires prescription',
  TOTAL_ORDER_AMOUNT = 'Total order amount',
  PAYMENT_METHOD_TITLE = 'Payment method',
  ORDER_SUMMARY = 'Order Summary',
  SUBTOTAL = 'Subtotal',
  DELIVERY_RATE = 'Delivery rate',
  ORDER_PLACED = 'Order Placed',
  ORDER_PLACED_BODY = 'Thank you for your order. Your order has been successfully placed',
  ORDER_PLACED_TOTAL_QTY = 'You have ordered',
  DELIVERY_ADDRESS = 'Delivery address',

  //Presctription
  UPLOAD_PRESCRIPTION_TITLE = 'Upload prescription',
  PRODUCT_WITH_DESCRIPTION_TITLE = 'Products that need prescription',
  PRESCRIPTION_UPLOADED = 'Prescription(s) uploaded',
  PRESCRIPTION_EMPTY = 'No prescriptions uploaded yet',
  UPLOAD_DESCRIPTION_HEADER = 'Items in your cart needs prescription before checking out',
  PRESCRIPTION_REMINDER_TITLE = 'Reminders for uploading prescriptions:',
  PRESCRIPTION_REMINDER_ONE = 'Accepted image formats: JPG, JPEG, PNG',
  PRESCRIPTION_REMINDER_TWO = 'You can upload up to 10 images of your prescriptions',
  PRESCRIPTION_REMINDER_THREE = 'You can upload up to 5mb max on image size',
  PRESCRIPTION_MANAGER_TITLE = 'Prescriptions uploaded',
}
