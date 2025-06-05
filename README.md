# Gmail Forwarder

A Google Apps Script that automatically forwards Gmail messages based on search criteria.

## Setup

1. Create a new Google Apps Script project
2. Set script properties:
   - `QUERY`: Gmail search query (e.g., `is:unread from:notifications@example.com`)
   - `FORWARD_TO`: Target email address
   - `FROM`: (Optional) Sender address for forwarded emails

## Development

```bash
# Install dependencies
pnpm install

# Build and deploy to development
pnpm deploy

# Deploy to production
pnpm deploy:prod
```

## Usage

The script will:
- Search for emails matching the query
- Forward all unread messages to the specified address
- Mark the original threads as read

Set up a time-driven trigger to run automatically.

## License

Apache License 2.0
