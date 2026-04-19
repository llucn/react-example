import { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
} from 'antd';
import { apiClient } from '../auth/api-client';
import { BaiduMapPicker } from '../components/BaiduMapPicker';

const { TextArea } = Input;

interface IssueFormValues {
  title: string;
  description: string;
  location: { longitude: number; latitude: number };
  address?: string;
  deadline: unknown;
  recruitCount?: number;
  skillRequirement?: string;
}

export function PublishIssuePage() {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values: IssueFormValues) => {
    setSubmitting(true);
    try {
      const { location, ...rest } = values;
      const payload = {
        ...rest,
        longitude: location.longitude,
        latitude: location.latitude,
        deadline: (values.deadline as { toISOString: () => string }).toISOString(),
      };
      await apiClient.post('/issues', payload);
      message.success('事件发布成功');
      form.resetFields();
    } catch {
      message.error('发布失败，请重试');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Publish Issue</h1>
      </div>
      <div className="card" style={{ maxWidth: 700 }}>
        <div className="card-body">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please enter the issue title' }]}
            >
              <Input placeholder="Please enter the issue title" maxLength={200} />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please enter the issue description' }]}
            >
              <TextArea rows={4} placeholder="Please enter the issue description" />
            </Form.Item>

            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true, message: 'Please select a location on the map' }]}
            >
              <BaiduMapPicker />
            </Form.Item>

            <Form.Item name="address" label="Address">
              <Input placeholder="Please enter the address description (optional)" maxLength={500} />
            </Form.Item>

            <Form.Item
              name="deadline"
              label="Deadline"
              rules={[{ required: true, message: 'Please select a deadline' }]}
            >
              <DatePicker
                showTime
                style={{ width: '100%' }}
                placeholder="Please select a deadline"
              />
            </Form.Item>

            <Form.Item name="recruitCount" label="Recruitment Count">
              <Input type="number" placeholder="Please enter the number of recruits (optional)" style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="skillRequirement" label="Skill Requirement">
              <TextArea rows={2} placeholder="Please enter the skill requirement (optional)" maxLength={500} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={submitting}>
                Publish
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
