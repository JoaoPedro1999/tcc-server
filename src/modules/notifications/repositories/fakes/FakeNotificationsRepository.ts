import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ICreateAppointmentDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ObjectID } = require('mongodb');

class FakeNotificationsRepository implements INotificationsRepository {
  private notifications: Notification[] = [];

  public async create({
    recipient_id,
    content,
  }: ICreateAppointmentDTO): Promise<Notification> {
    const notification = new Notification();

    notification.id = new ObjectID();
    notification.recipient_id = recipient_id;
    notification.content = content;

    this.notifications.push(notification);

    return notification;
  }
}

export default FakeNotificationsRepository;
