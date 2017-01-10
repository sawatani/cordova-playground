#!/bin/bash

mkdir -vp ~/.android

echo "# Set SDK licenses agree"
mkdir -vp $ANDROID_HOME/licenses
echo -e '\n8933bad161af4178b1185d1a37fbf41ea5269c55' > $ANDROID_HOME/licenses/android-sdk-license

echo -e '\nandroid.builder.sdkDownload=true' >> platforms/android/gradle.properties
