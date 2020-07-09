from rest_framework import serializers
from portfolio.models import UserProfile
from django.contrib.auth import get_user_model, login, authenticate
from django.shortcuts import  redirect






User = get_user_model()

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input':'password'}, write_only=True)
    password2 = serializers.CharField(style={'input':'password'}, write_only=True)
  

    class Meta:
        model = UserProfile
        fields = ('__all__')
        extra_kwargs = {
            'password':{
              'write_only': True,
              'style':{'input_type':'password'}
            }
        }



    def validate(self, data):
        pw = data.get('password')
        pw2 = data.get('password2')
        if pw != pw2:
            raise serializers.ValidationError('password must match')
        return data

    def create(self, validated_data):
        new_user = User(
        username=validated_data.get('username'),
        email=validated_data.get('email'),
        first_name = validated_data['name'],
        )
        new_user.set_password(validated_data.get('password'))
        new_user.save()
        
        new_user = UserProfile(
        username=validated_data.get('username'),
        email=validated_data.get('email'),
        name = validated_data.get('name'),
        address = validated_data.get('address'),
        about = validated_data.get('about'),
        phone = validated_data.get('phone'),
        age = validated_data.get('age'),
        stack = validated_data.get('stack'))

        new_user.save()
        return new_user

      



class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('__all__')







