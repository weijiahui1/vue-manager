import env from './env'
// http://appdev.jbr365.com/work-manager/
// https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/
const DEV_URL = '/api/work-manager/'
const PRO_URL = 'https://app.jbr365.com/work-manager/'

export default env === 'development' ? DEV_URL : PRO_URL
