# Installation

---

## 1. Prerequisites for SDK

- **Node.js** + **npm**  
- **Python** + **pip**

---

## 2. OpenAPI docs

```bash
git clone https://github.com/WorldSpam/hotel-booking-api.git
```

## 3. Installing the Python SDK

# Clone the SDK repo
```bash
git clone https://github.com/WorldSpam/hotel-booking-sdk.git
cd hotel-booking-sdk
```
# Local installation via pip
```bash
pip install .
```
# Then import the package:
```python
import hotel_sdk
```

# Getting Started

```python

import hotel_sdk
from hotel_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = hotel_sdk.Configuration(
    host = "https://api.example.com/v1"
)

# Enter a context with an instance of the API client
with hotel_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = hotel_sdk.DefaultApi(api_client)
    page = 1 # int | Page number (optional) (default to 1)
    size = 10 # int | Page size (optional) (default to 10)

    try:
        # Get a list of hotels.
        api_response = api_instance.hotels_get(page=page, size=size)
        print("The response of DefaultApi->hotels_get:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DefaultApi->hotels_get: %s\n" % e)

```