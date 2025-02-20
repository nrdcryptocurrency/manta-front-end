import { usePrivateWallet } from 'contexts/privateWalletContext';
import { useExternalAccount } from 'contexts/externalAccountContext';
import ZkTransactConnectSignerModal from './ZkTransactConnectSignerModal';
import ZkTransactConnectWalletModal from './ZkTransactConnectWalletModal';
import ZkTransactConnectedModal from './ZkTransactConnectedModal';

const ZkTransactGuideModal = () => {
  const { externalAccount } = useExternalAccount();
  const { signerIsConnected } = usePrivateWallet();
  return (
    <>
      {!externalAccount && !signerIsConnected && (
        <ZkTransactConnectWalletModal />
      )}
      {externalAccount && !signerIsConnected && (
        <ZkTransactConnectSignerModal />
      )}
      {signerIsConnected && externalAccount && <ZkTransactConnectedModal />}
    </>
  );
};

export default ZkTransactGuideModal;
