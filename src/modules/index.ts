import { getOrderDetails, updateOrderStatus } from '../modules/order'
import { fetchProducts, fetchProductsGroupedBy, fetchProductsGroupedByParent } from '../modules/product'
import { getProductIdentificationPref, getProfile, getUserFacilities, getUserPreference, logout, setProductIdentificationPref, setUserPreference, setUserLocale } from '../modules/user'
import { getNotificationEnumIds, getNotificationUserPrefTypeIds, removeClientRegistrationToken, storeClientRegistrationToken, subscribeTopic, unsubscribeTopic } from '../modules/notification'
import { fetchProductsStock, fetchProductsStockAtFacility } from '../modules/stock'

export {
  fetchProducts,
  fetchProductsGroupedBy,
  fetchProductsGroupedByParent,
  fetchProductsStock,
  fetchProductsStockAtFacility,
  getNotificationEnumIds,
  getNotificationUserPrefTypeIds,
  getOrderDetails,
  getProductIdentificationPref,
  getProfile,
  removeClientRegistrationToken,
  logout,
  setProductIdentificationPref,
  storeClientRegistrationToken,
  subscribeTopic,
  unsubscribeTopic,
  getUserFacilities,
  updateOrderStatus,
  getUserPreference,
  setUserPreference,
  setUserLocale
}