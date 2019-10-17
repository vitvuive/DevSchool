package com.hehiu;

import android.content.Intent;

import com.facebook.react.ReactActivity;
import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    protected String getMainComponentName() {
        return "hehiu";
    }
    

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent){
        super.onActivityResult(requestCode,resultCode,intent);
        MainApplication.getCallbackManager().onActivityResult(requestCode,resultCode,intent);
    }
}
