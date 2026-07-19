#!/usr/bin/env bash
# Install signature.mailsignature into Apple Mail.
# Run in Terminal.app (may need Full Disk Access for ~/Library/Mail).
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
SRC="$DIR/signature.mailsignature"
MAIL_ROOT="$HOME/Library/Mail"

if [[ ! -f "$SRC" ]]; then
  echo "Missing source: $SRC" >&2
  exit 1
fi

if [[ ! -d "$MAIL_ROOT" ]]; then
  echo "Apple Mail data not found at $MAIL_ROOT" >&2
  echo "Open Mail once, create a blank signature, quit Mail, then re-run." >&2
  exit 1
fi

# Newest V* folder
VDIR="$(ls -d "$MAIL_ROOT"/V* 2>/dev/null | sort -V | tail -1 || true)"
SIGDIR="$VDIR/MailData/Signatures"

if [[ -z "${VDIR:-}" || ! -d "$SIGDIR" ]]; then
  echo "No Signatures folder under $MAIL_ROOT" >&2
  echo "In Mail: Settings → Signatures → +, name it, quit Mail, re-run." >&2
  exit 1
fi

TARGET="$(ls -t "$SIGDIR"/*.mailsignature 2>/dev/null | head -1 || true)"
if [[ -z "$TARGET" ]]; then
  echo "No .mailsignature files in $SIGDIR" >&2
  echo "Create a blank signature in Mail first, then quit Mail." >&2
  exit 1
fi

echo "Using: $TARGET"

chflags nouchg "$TARGET" 2>/dev/null || true

MSG_ID="$(awk -F': ' 'BEGIN{IGNORECASE=1} /^Message-Id:/{print $2; exit}' "$TARGET" || true)"
if [[ -z "$MSG_ID" ]]; then
  MSG_ID="<lars-ullrich-signature@larsullrich.de>"
fi

{
  echo "Content-Transfer-Encoding: 7bit"
  echo "Content-Type: text/html;"
  echo "	charset=us-ascii"
  echo "Message-Id: $MSG_ID"
  echo "Mime-Version: 1.0 (Mac OS X Mail)"
  echo ""
  awk 'BEGIN{p=0} /<body/{p=1} p{print}' "$SRC"
} > "$TARGET"

chflags uchg "$TARGET"

echo "Installed and locked."
echo "Reopen Mail and check a new message signature."
