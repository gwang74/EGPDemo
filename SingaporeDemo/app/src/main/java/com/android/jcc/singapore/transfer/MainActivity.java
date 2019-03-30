package com.android.jcc.singapore.transfer;

import android.graphics.Bitmap;
import android.graphics.Color;
import android.net.Uri;
import android.net.http.SslError;
import android.os.Build;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.SslErrorHandler;
import android.webkit.ValueCallback;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    private static final String TAG = "MainActivity";

    private static WebView mWebView;
    private ValueCallback<Uri> uploadMessage;
    private ValueCallback<Uri[]> uploadMessageAboveL;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initView();
//        mWebView.loadUrl("file:///android_asset/index.html");
        mWebView.loadUrl("https://weidex.vip");
    }

    @Override
    protected void onDestroy() {
        //销毁WebView
        if (mWebView != null) {
            mWebView.loadDataWithBaseURL(null, "", "text/html", "utf-8", null);
            mWebView.clearHistory();
            ((ViewGroup) mWebView.getParent()).removeView(mWebView);
            mWebView.destroy();
            mWebView = null;
        }
        super.onDestroy();
    }

    /**
     * webView初期配置
     */
    private void initView() {
        mWebView = findViewById(R.id.mWebView);
        WebSettings setting = mWebView.getSettings();
        mWebView.setHorizontalScrollBarEnabled(false);
        mWebView.setVerticalScrollBarEnabled(false);
        //获取手势焦点
        mWebView.requestFocusFromTouch();
        setting.setNeedInitialFocus(true);
        //支持Js
        setting.setJavaScriptEnabled(true);
        //缓存模式
        setting.setCacheMode(WebSettings.LOAD_NO_CACHE);
        //是否支持画面缩放，默认不支持
        setting.setBuiltInZoomControls(true);
        setting.setSupportZoom(true);
        //是否显示缩放图标，默认显示
        setting.setDisplayZoomControls(false);
        //设置网页内容自适应屏幕大小
        setting.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.SINGLE_COLUMN);
        setting.setUseWideViewPort(true);
        setting.setLoadWithOverviewMode(true);
        setting.setDomStorageEnabled(true);
        //http图片显示
        setting.setBlockNetworkImage(false);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            setting.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        }
        setting.setMediaPlaybackRequiresUserGesture(false);

        //跨域访问
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
            setting.setAllowUniversalAccessFromFileURLs(true);
        }

        //主要用于平板，针对特定屏幕代码调整分辨率
        int screenDensity = getResources().getDisplayMetrics().densityDpi;
        WebSettings.ZoomDensity zoomDensity = WebSettings.ZoomDensity.MEDIUM;
        switch (screenDensity) {

            case DisplayMetrics.DENSITY_LOW:
                zoomDensity = WebSettings.ZoomDensity.CLOSE;
                break;

            case DisplayMetrics.DENSITY_MEDIUM:
                zoomDensity = WebSettings.ZoomDensity.MEDIUM;
                break;

            case DisplayMetrics.DENSITY_HIGH:
                zoomDensity = WebSettings.ZoomDensity.FAR;
                break;
        }
        setting.setDefaultZoom(zoomDensity);

        mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view, url, favicon);
                Log.v(TAG, "onPageStarted---->" + url);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                Log.v(TAG, "onPageFinished---->" + url);
                if (mWebView != null && mWebView.getProgress() == 100) {
                    mWebView.setVisibility(View.VISIBLE);
                    getWindow().setNavigationBarColor(Color.BLACK);
                    getWindow().setStatusBarColor(Color.BLACK);

                }
            }

            @Override
            public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError
                    error) {
                handler.proceed(); // 接受所有网站的证书
            }
        });
    }
}
