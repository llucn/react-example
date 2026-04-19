import { useEffect, useState } from 'react';
import { Device } from '@capacitor/device';

export function DevicePage() {
  const [deviceInfo, setDeviceInfo] = useState<{
    id: string; 
    info: any; 
    batteryInfo: any; 
    languageCode: any; 
    languageTag: any; 
  } | null>(null);

  async function fetchDeviceInfo() {
    const id = await Device.getId();
    const info = await Device.getInfo();
    const batteryInfo = await Device.getBatteryInfo();
    const languageCode = await Device.getLanguageCode();
    const languageTag = await Device.getLanguageTag();

    return {
      id: id.identifier,
      info,
      batteryInfo,
      languageCode: languageCode.value,
      languageTag: languageTag.value,
    };
  }

  useEffect(() => {
    fetchDeviceInfo().then(setDeviceInfo);
  }, []);

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Device Information</h1>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="meta-grid">
            <div className="meta-item">
              <span className="meta-label">ID</span>
              <span className="meta-value">{deviceInfo?.id}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Info</span>
              <span className="meta-value">{JSON.stringify(deviceInfo?.info, null, 2)}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Battery Info</span>
              <span className="meta-value">{JSON.stringify(deviceInfo?.batteryInfo, null, 2)}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Language Code</span>
              <span className="meta-value">{deviceInfo?.languageCode}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Language Tag</span>
              <span className="meta-value">{deviceInfo?.languageTag}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
