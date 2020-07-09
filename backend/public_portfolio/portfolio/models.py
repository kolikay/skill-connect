from django.db import models



class UserProfile(models.Model):
    name        = models.CharField(max_length=122, null=False, blank=False)
    age         = models.IntegerField(default=2, null=True, blank=True)
    email       = models.EmailField(unique=True, null=False, blank=False)
    phone       = models.CharField(max_length=11, null=True, blank=True)
    address     = models.CharField(max_length=200, null=True, blank=True)
    about       = models.TextField(null=True, blank=True)
    date_added  = models.DateTimeField(auto_now_add=True,  null=True, blank=True)
    username    = models.CharField(max_length=122, null=True, blank=True)
    stack       = models.CharField(max_length=222, null=True, blank=True)
    image       = models.ImageField(upload_to='users-pix/', null=True, blank=True) 
    resume      = models.FileField(upload_to='resume/', null=True, blank=True) 
    
    

    def __str__(self):
        return self.name 





