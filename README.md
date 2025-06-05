# Gmail Forwarder

A Google Apps Script that automatically forwards Gmail messages based on search criteria.

## Recommended Usage with Gmail Filters

For better control and organization, combine this script with Gmail filters:

1. **Create Gmail Filter**: Set up a filter to automatically label incoming emails
   - Go to Gmail Settings → Filters and Blocked Addresses
   - Create filter with conditions (sender, subject, etc.)
   - Apply label (e.g., `some-library-forward`)

2. **Configure Script**: Use the label in your search query
   - Example: `label:some-library-forward is:unread`
   - This ensures only labeled unread emails are forwarded

## Setup

1. Create a new Google Apps Script project
2. Set script properties:
   - `QUERY`: Gmail search query (e.g., `label:some-library-forward is:unread`)
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
