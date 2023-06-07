var colby062 = JSON.parse($response.body);
const vip = '/subscriptions/verify';
const active = '/marketing/consent/status';

if ($request.url.indexOf(vip) != -1){
  colby062.licenses = [
    {
      "product_id" : "com.itranslate.pro.yearly",
      "bundle_id" : "com.outerspaceapps.itranslate",
      "is_trial_period" : true,
      "original_transaction_id" : "160001314520000",
      "expires_date_ms" : 4092599350000,
      "transaction_id" : "160001314520000"
    }
  ];
}

if ($request.url.indexOf(active) != -1){
  colby062 ={
  "is_active" : true
  };
}

$done({body : JSON.stringify(colby062)});
