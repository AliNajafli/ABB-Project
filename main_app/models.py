from django.db import models

import uuid
from django.db import models

class UserPhoneBook(models.Model):
    user_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name=models.CharField(max_length=100)
    phone=models.CharField(max_length=100)

    def __str__(self):
        return self.name + "-" +self.phone