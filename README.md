# Botsplash Media File Upload Example

This guide demonstrates how to use media attachments with the Botsplash Open API. The Listener API supports media uploads in two ways:

1. **Direct Media URL**: Include a publicly accessible link to the media (via `args.mediaUrl`).
2. **Media Key Upload**: Upload the media using the Botsplash Media API and use the resulting media key (`args.mediaKey`).

**Important Notes**:
- Different carriers have varying levels of support for media formats. We recommend using commonly supported formats such as:
  - **Image**: JPG, PNG
  - **Video**: MP4
  - **Document**: PDF
- Carriers impose size limitations on media attachments:
  - Typical size limit: **less than 1MB**.
  - Some conditions allow up to **5MB**.
- For account-specific confirmation, contact your Botsplash representative.

---

## Direct Link Example

To use a direct media URL, update the [Botsplash Listener API](https://developer.botsplash.space/docs/#new-visitor-post) with `mediaUrl`:

```json
{
  "visitor": {
    "clientVisitorId": "12345",
    "agentClientUserId": "12345",
    "participantAgentIds": "54321",
    "teamCode": "333",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "example@example.com",
    "phoneNumber": "3334445555",
    "state": "NC",
    "tzName": "America/New_York",
    "deliveryStatus": 202,
    "extendedAttributes": {
      "color": "red",
      "leadSourceId": "123456789",
      "priority": "high"
    }
  },
  "args": {
    "mediaUrl": "https://app.botsplash.com/assets/images/www/logo-200.png"
  }
}
```

## Media Upload Example

To use a media key, follow these steps to generate one:

### 1. Clone the Example Repository

```bash
git clone https://github.com/botsplash/bspmediaupload.git
cd bspmediaupload
npm install
cp .env.example .env
```

2. Update .env file credentials

Open the .env file and update it with your Botsplash account credentials. This ensures the application can authenticate with the Botsplash Media API.

3. Start the application:

```
npm run start
```
Once the application is running, it will output the `mediaKey`. This key will be used in subsequent API calls to associate the uploaded media with your requests.


4. Use the [Botsplash Listener API](https://developer.botsplash.space/docs/#new-visitor-post) with mediaKey:

After obtaining the `mediaKey`, include it in your payload when making requests to the Botsplash Listener API. Here's an example:
```
{
  "visitor": {
    "clientVisitorId": "12345",
    "agentClientUserId": "12345",
    "participantAgentIds": "54321",
    "teamCode": "333",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "example@example.com",
    "phoneNumber": "3334445555",
    "state": "NC",
    "tzName": "America/New_York",
    "deliveryStatus": 202,
    "extendedAttributes": {
      "color": "red",
      "leadSourceId": "123456789",
      "priority": "high"
    }
  },
  "args": {
    "mediaKey": "<MEDIA_KEY_GENERATED_FROM_THE_APP>"
  }
}
```
Replace `<MEDIA_KEY_GENERATED_FROM_THE_APP>` with the actual media key generated by the application.
