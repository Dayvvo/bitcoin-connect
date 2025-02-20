import {customElement} from 'lit/decorators.js';
import {BitcoinConnectElement} from '../BitcoinConnectElement';
import {withTwind} from '../twind/withTwind';
import {html} from 'lit';
import {classes} from '../css/classes';
import '../internal/bci-button';
import {albyhubIcon} from '../icons/connectors/albyHubIcon';

@customElement('bc-new-wallet')
export class NewWalletPage extends withTwind()(BitcoinConnectElement) {
  override render() {
    return html`<div>
      <bc-navbar
        class="flex w-full"
        heading="Get a bitcoin lightning wallet"
      ></bc-navbar>

      <div class="flex flex-col gap-5 w-full my-6 px-8 font-sans text-sm">
        <div class="flex flex-row items-center space-x-4">
          <div>
            <div
              class="p-2 bg-black drop-shadow rounded-xl flex items-center justify-center"
            >
              ${albyhubIcon}
            </div>
          </div>
          <p class="text-sm ${classes['text-neutral-secondary']}">
            To get the best self-custodial bitcoin lightning wallet that can
            connect to apps, try
            <a
              href="https://albyhub.com"
              target="_blank"
              class="no-underline font-bold ${classes.interactive} ${classes[
                'text-brand-mixed'
              ]}"
              >Alby Hub</a
            >.
          </p>
        </div>
        <div class="flex flex-row items-center space-x-4">
          <div>
            <div
              class="p-2 bg-black drop-shadow rounded-xl flex items-center justify-center"
            >
              ${albyhubIcon}
            </div>
          </div>
          <p class="text-sm ${classes['text-neutral-secondary']}">
            For a quick setup of a custodial wallet, you can choose between
            <a
              href="https://primal.net"
              target="_blank"
              class="no-underline font-bold ${classes.interactive} ${classes[
                'text-brand-mixed'
              ]}"
              >Primal</a
            >,
            <a
              href="https://coinos.io"
              target="_blank"
              class="no-underline font-bold ${classes.interactive} ${classes[
                'text-brand-mixed'
              ]}"
              >CoinOS</a
            >
            or
            <a
              href="https://lifpay.me"
              target="_blank"
              class="no-underline font-bold ${classes.interactive} ${classes[
                'text-brand-mixed'
              ]}"
              >LifPay</a
            >.
          </p>
        </div>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bc-new-wallet': NewWalletPage;
  }
}
