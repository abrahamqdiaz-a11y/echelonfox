export interface EmailSettings {
  business_name: string;
  physical_address: string;
  logo_url: string;
  brand_color: string;
}

export function buildEmailHtml({
  bodyHtml,
  firstName,
  contactId,
  settings,
  baseUrl,
}: {
  bodyHtml: string;
  firstName: string;
  contactId: string;
  settings: EmailSettings;
  baseUrl: string;
}): string {
  const body = bodyHtml.replace(/\{\{first_name\}\}/g, firstName || "there");
  const unsubUrl = `${baseUrl}/unsubscribe?contact_id=${contactId}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
<tr><td align="center">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
  <tr>
    <td style="background:${settings.brand_color};padding:28px 40px;text-align:center;">
      ${
        settings.logo_url
          ? `<img src="${settings.logo_url}" alt="${settings.business_name}" style="max-height:48px;max-width:220px;display:inline-block;">`
          : `<span style="color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">${settings.business_name}</span>`
      }
    </td>
  </tr>
  <tr>
    <td style="padding:40px;color:#1a1a1a;font-size:16px;line-height:1.7;">
      ${body}
    </td>
  </tr>
  <tr>
    <td style="padding:24px 40px;background:#f9f9f9;border-top:1px solid #eeeeee;text-align:center;">
      <p style="margin:0 0 6px;font-size:13px;color:#888888;">${settings.business_name}</p>
      <p style="margin:0 0 12px;font-size:13px;color:#888888;">${settings.physical_address}</p>
      <p style="margin:0;font-size:12px;">
        <a href="${unsubUrl}" style="color:${settings.brand_color};text-decoration:underline;">Unsubscribe</a>
      </p>
    </td>
  </tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}
