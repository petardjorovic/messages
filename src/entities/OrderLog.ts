import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from './Cart';

@Index('uq_order_log_cart_id', ['cartId'], { unique: true })
@Entity('order_log')
export class OrderLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'order_log_id', unsigned: true })
  orderLogId: number;

  @Column({ type: 'int', name: 'cart_id', unique: true, unsigned: true })
  cartId: number;

  @Column({
    type: 'timestamp',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    type: 'enum',
    enum: ['rejected', 'accepted', 'shipped', 'pending'],
    default: () => "'pending'",
  })
  status: 'rejected' | 'accepted' | 'shipped' | 'pending';

  @OneToOne(() => Cart, (cart) => cart.orderLog, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'cart_id', referencedColumnName: 'cartId' }])
  cart: Cart;
}
