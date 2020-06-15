import { container } from 'tsyringe';

import IHashProvider from './hashProvider/models/IHashProvider';
import BCryptHashProvider from './hashProvider/implementations/BCryptHashProvider';

const providers = {
  bcrypt: BCryptHashProvider,
};

container.registerSingleton<IHashProvider>('HashProvider', providers.bcrypt);
