export const UPDATE_LOADER = 'UPDATE_LOADER';
export const SHOW_TOAST = 'SHOW_TOAST';
export const UPDATE_APP_STATE = 'UPDATE_APP_STATE';

export const showToast = (title) => {
    return {
        type: SHOW_TOAST,
        toast: {
            show: true,
            title,
        }
    };
}

export const enableLoader = (payload) => ({ type: UPDATE_LOADER, loader: true });
export const disableLoader = (payload) => ({ type: UPDATE_LOADER, loader: false });
export const updateStates = (payload) => ({ type: UPDATE_APP_STATE, payload });