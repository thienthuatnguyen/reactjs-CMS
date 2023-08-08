export const setToken = (token: string) => localStorage.setItem('token', token);
export const getToken = () => localStorage.getItem('token');
export const clearToken = () => localStorage.removeItem('token');
export const setPermissions = (permissions: string) => localStorage.setItem('permissions', permissions);
export const getPermissions = () => localStorage.getItem('permissions');
export const clearPermissions = () => localStorage.removeItem('permissions');
export const setUserData = (userData: any) => localStorage.setItem('userData', userData);
export const getUserData = () => localStorage.getItem('userData');
export const clearUserData = () => localStorage.removeItem('userData');
export const setApikey = (token: string) => localStorage.setItem('apikey', token);
export const getApikey = () => localStorage.getItem('apikey');
export const clearApikey = () => localStorage.removeItem('apikey');

export const setSampleId = (sampleId: string) => localStorage.setItem('sampleId', sampleId);
export const getSampleId = () => localStorage.getItem('sampleId');
export const clearSampleId = () => localStorage.removeItem('sampleId');

export const setTaskId = (taskId: string) => localStorage.setItem('taskId', taskId);
export const getTaskId = () => localStorage.getItem('taskId');
export const clearTaskId = () => localStorage.removeItem('taskId');

export const setTimeOutVNC = (time: string) => localStorage.setItem('timeOutVNC', time);
export const getTimeOutVNC = () => localStorage.getItem('timeOutVNC');
export const clearTimeOutVNC = () => localStorage.removeItem('timeOutVNC');