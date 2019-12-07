package com.hehiu.map;

import android.app.Activity;
import android.content.Intent;
import android.location.LocationManager;
import android.provider.Settings;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.android.gms.common.api.GoogleApiClient;

import java.util.HashMap;
import java.util.Map;

public class LocationService extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    private Promise promise;
    private GoogleApiClient googleApiClient;
    private Integer REQUEST_ENABLE_BT = 500;

    public LocationService(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "LocationService";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        return constants;
    }

    @ReactMethod
    public void toastText() {
        Log.d("viet", "viet dep trai");
        Toast.makeText(getReactApplicationContext(), "Viet dep trai", Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void checkLocation(Promise promise) {
        Activity _activity = getCurrentActivity();

        Toast.makeText(getReactApplicationContext(), "Viet dep trai", Toast.LENGTH_SHORT).show();
        final LocationManager manager = (LocationManager) reactContext.getSystemService(reactContext.LOCATION_SERVICE);

        if (!manager.isProviderEnabled(LocationManager.GPS_PROVIDER)) {
            Toast.makeText(getReactApplicationContext(), "Vo nha", Toast.LENGTH_SHORT).show();
//            Intent enableLocation = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
//            _activity.startActivityForResult(enableLocation, REQUEST_ENABLE_BT);
//            promise.resolve(true);

            Intent intent = new Intent();
            intent.setAction(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
            _activity.startActivity(intent);

        }
    }

}
