// Redux
import { resetMessage } from "../Slices/photoSlice";

export const useResetComponentMessage = (dispatch) => {
    return () => {
        setTimeout(() => {
            dispatch(resetMessage());
        }, 2000)
    }
}