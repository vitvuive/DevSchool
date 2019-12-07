package com.hehiu.meety;

import android.annotation.SuppressLint;
import android.content.Intent;

import com.reactnativenavigation.NavigationActivity;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.widget.LinearLayout;


public class MainActivity extends NavigationActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    protected String getMainComponentName() {
        return "meety";
    }

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(this.createSplashLayout());
    }
    

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent){
        super.onActivityResult(requestCode,resultCode,intent);
        MainApplication.getCallbackManager().onActivityResult(requestCode,resultCode,intent);
    }

    @SuppressLint("InflateParams")
    public LinearLayout createSplashLayout(){
        return (LinearLayout) LayoutInflater.from(this).inflate(R.layout.splash_layout, null);
    }
}
