from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model
from .models import UserProfile


class LoginForm(forms.Form):
    username          = forms.CharField()
    password          = forms.CharField(widget=forms.PasswordInput)




User = get_user_model()
class SignUpForm(forms.Form):
    username            = forms.CharField()
    name                = forms.CharField()
    age                 = forms.IntegerField()
    phone               = forms.IntegerField()
    address             = forms.CharField()
    About_me            = forms.CharField(widget=forms.Textarea)
    email               = forms.EmailField()
    password            = forms.CharField(widget=forms.PasswordInput)
    password2           = forms.CharField(label = 'confirm password', widget=forms.PasswordInput)


    # create a method to clean user name data
    def clean_username(self):
        # set a variable for clean data
        username = self.cleaned_data.get('username')
        # use the user model to set a query to get data from data base
        qs = User.objects.filter(username=username)
        # use the query set to check if data already exixsts
        if qs.exists():
            # raise value error if data exixst
            raise forms.ValidationError('user name has been taken')
            # if not, return clean data
        return username


    
     # create a method to clean user name data
    def clean_email(self):
        # set a variable for clean data
        email = self.cleaned_data.get('email')
        # use the user model to set a query to get data from data base
        qs = User.objects.filter(email=email)
        # use the query set to check if data already exixsts
        if qs.exists():
            # raise value error if data exixst
            raise forms.ValidationError('email has been taken')
            # if not, return clean data
        return email

    
    # # created a method to clean password input data
    # def clean_password(self):
    #     # set a variable for clean data
    #     data = self.cleaned_data
    #     # get each clean data and store to variable
    #     password = self.cleaned_data.get('password')
    #     password2 = self.cleaned_data.get('password2')
    #     # compare to make sure both variabe data are same
    #     if password != password2:
    #         # if not same raise value error
    #         raise forms.ValidationError('passwords must match')
    #         # return cleaned data
    #     return data
    


# class SignUpForm(UserCreationForm):
#     first_name = forms.CharField()
#     last_name = forms.CharField()
#     email    = forms.EmailField(widget=forms.EmailInput(attrs={'class':'form-control', 'placeholder':'Your Emaill'}))
   
#     class Meta():
#         model = UserProfile
#         fields = ['first_name', 'last_name', 'email', 'username', 'password1', 'password2']

