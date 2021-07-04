import { configureStore } from '@reduxjs/toolkit';

// Feature store slices
import siteConfigReducer from '@local-store/SiteConfig';

export const store = configureStore({
  reducer: {
    siteConfig: siteConfigReducer
  }
});
